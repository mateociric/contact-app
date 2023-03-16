function uploadPhoto(event: React.ChangeEvent<HTMLInputElement>) {
    const file = (event.target.files as any)[0];
    if (file) {
        const reader = new FileReader();
        reader.addEventListener('load', (event: any) => {
            document.querySelector('img')!.src = event.currentTarget.result;
        });
        reader.readAsDataURL(file);
    }
}

export default uploadPhoto;