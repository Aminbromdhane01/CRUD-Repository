import { ConfigOptions, v2 } from 'cloudinary';
const CLOUDINARY = 'Cloudinary';

export const CloudinaryProvider = {
    provide: CLOUDINARY,
    useFactory: (): void | ConfigOptions => {
        return v2.config({
            cloud_name: 'dft3wn8xj',
            api_key: '252329314716514',
            api_secret: 'bBj5wxas1IFIsxKvrlB-XEqASF4',
        });
    },
};