const SERVER_URL = 'http://localhost:3001';

export async function saveImage(file: File): Promise<string> {
  const formData = new FormData();
  formData.append('image', file);

  const response = await fetch(`${SERVER_URL}/upload`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to upload image');
  }

  const result = await response.json();
  return result.filename;
}

export async function loadImage(imageName: string): Promise<string> {
  return `${SERVER_URL}/images/${imageName}`;
}