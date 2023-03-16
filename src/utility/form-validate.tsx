const validator: { [key: string]: any } = {
    firstName: {
        minLength: minLength(2),
        maxLength: maxLength(20),
    },
    lastName: {
        minLength: minLength(2),
        maxLength: maxLength(20),
    },
    phoneNumber: {
        minLength: minLength(9),
        onlyNum: onlyNum,
    },
    emailAddress: {
        onlyEmail: onlyEmail,
    }
}

function minLength(length: number) {
    return (input: HTMLInputElement) => {
        //will always perform clean up of the old warnings 
        input.className = '';
        (input.nextElementSibling as HTMLElement).innerHTML = '';
        if (input.value.trim().length < length) {
            input.className = 'warning';
            if (input.id !== 'phoneNumber') {
                (input.nextElementSibling as HTMLElement).innerHTML = `Min. ${length} characters are required`;
            } else {
                (input.nextElementSibling as HTMLElement).innerHTML = `Min. ${length} numbers are required`;
            }
        }
    }
}
function maxLength(length: number) {
    return (input: HTMLInputElement) => {
        if (input.value.trim().length > length) {
            input.className = 'warning';
            (input.nextElementSibling as HTMLElement).innerHTML = `Max. is ${length} characters`;
        }
    }
}
function onlyNum(input: HTMLInputElement) {
    if (!input.value.match(/^[0-9]*$/g)) {
        input.className = 'warning';
        (input.nextElementSibling as HTMLElement).innerHTML = `Only numbers`;
    }
}
function onlyEmail(input: HTMLInputElement) {
    //there is no minLength() before, reason why clean up of the old warnings is set here
    input.className = '';
    input.className = 'form__input';
    (input.nextElementSibling as HTMLElement).innerHTML = '';
    if (!input.value.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
        input.className = 'warning';
        (input.nextElementSibling as HTMLElement).innerHTML = `Invalid email address`;
    }
}

function validateForm(formEl: HTMLFormElement) {
    const arrOfFormInputs = [...formEl].filter(el => {
        return el.tagName === 'INPUT';
    });

    arrOfFormInputs.forEach(el => {
        //choose validator property based on input.name
        const key = (el as HTMLInputElement).id;
        for (const prop in validator[key]) {
            validator[key][prop](el);
        }
    });

    const isEveryInputOk = arrOfFormInputs.every(el => {
        return el.className !== 'warning'
    });

    return isEveryInputOk;
}

export default validateForm;