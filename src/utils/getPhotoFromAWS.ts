const AWS_URL = 'https://kompawion-large-images.s3.eu-west-2.amazonaws.com/';

export const getPhotoFromAWS = (index: number) => {
  return `${AWS_URL}large${index + 1}.jpeg`;
};
