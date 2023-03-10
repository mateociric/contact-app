function uploadPhoto(event: React.ChangeEvent<HTMLInputElement>) {
    let file = (event.target.files as any)[0];
    if (file) {
        const blobURL = window.URL.createObjectURL(file);
        const img = document.querySelector('img')!;
        img.addEventListener('load', () => {
            URL.revokeObjectURL(file);
        });
        img.src = blobURL;
    }
}

export default uploadPhoto;