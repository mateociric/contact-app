function uploadPhoto(event: any, setUploadedPhoto: Function) {
    const file = (event.target.files)[0];
    if (file) {
        const reader = new FileReader();
        reader.addEventListener('load', (event: any) => {
            setUploadedPhoto(event.currentTarget.result);
        });
        reader.readAsDataURL(file);
    }
}

export default uploadPhoto;