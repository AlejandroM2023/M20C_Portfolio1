import EmailForm from '../components/emailForm'

export default function Contact(){
    function handleSubmit(){
        const name = document.getElementById('name').value = '';
        const email = document.getElementById('email').value ='';
        const message = document.getElementById('message').value = '';
        const msg = document.getElementById('msg').innerText = 'Thank you for reaching out!';
    }

    return <>
        <EmailForm handleSubmit ={handleSubmit} />
    </>
}