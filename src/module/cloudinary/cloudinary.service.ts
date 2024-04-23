// cloudinary.service.ts

import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryResponse } from './cloudinaryresponse';

import streamifier from 'streamifier';

@Injectable()
export class CloudinaryService {
  uploadFile(file: Express.Multer.File): Promise<CloudinaryResponse> {
    return new Promise<CloudinaryResponse>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        },
      );

      streamifier.createReadStream(file.buffer).pipe(uploadStream);
    });
  }
  deleteFileByUrl(url: string): Promise<any> {
    const publicId = this.getPublicIdFromUrl(url);
    if (!publicId) {
      return Promise.reject(new Error('Invalid Cloudinary URL'));
    }

    return this.deleteFile(publicId);
  }
  private getPublicIdFromUrl(url: string): string | null {
    const urlParts = url.split('/');
    if (urlParts.length === 0) {
      return null; // Handle invalid URL
    }

    const deleteUrl = urlParts[urlParts.length - 1].split('.')[0];
    console.log(deleteUrl);

    return deleteUrl;
  }

  deleteFile(publicId: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      cloudinary.uploader.destroy(publicId, (error, result) => {
        if (error) return reject(error);
        resolve(result);
      });
    });
  }
}
