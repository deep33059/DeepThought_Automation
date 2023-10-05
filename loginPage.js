import { Selector } from 'testcafe';

const usernameInput =Selector('input#username');
const passwordInput=Selector('input#password');
const loginBtn=Selector('button#login');
const errortext=Selector('div#login-error-notify');
const dashboardscreen=Selector('h5').withText('Welcome to DeepThought');


fixture('Getting Started')
    .page('https://dev.deepthought.education/login');

test('valid login credentials TC001', async t => {
    await t
    .maximizeWindow()
    .typeText(usernameInput,'deep33059')
    .typeText(passwordInput, 'Dpk@9893863093')
    .click(loginBtn)
    .wait(4000)
    .takeScreenshot('DashBoardScreen.png')
    .wait(3000);

    const validationText= await dashboardscreen.innerText;

    console.log("VALIDATION MESSAGE OF DASHBOARD SCREEN ="+validationText);


               
});



test('invalid login credentials TC002', async t => {
    await t
    .maximizeWindow()
    .typeText(usernameInput,'deep33059')
    .typeText(passwordInput, 'Dpk@9893863092')
    .click(loginBtn)

    .expect(errortext.exists).ok()
    
    .takeScreenshot('ErrorTC002.png')
    .wait(3000);


    const ErrorMessage =await errortext.innerText;


    console.log("LOGIN ERROR MESSAGE ="+ErrorMessage);      
});

test('invalid login credentials TC003', async t => {
    await t
    .maximizeWindow()
    .typeText(usernameInput,'deep33058')
    .typeText(passwordInput, 'Dpk@9893863093')
    .click(loginBtn)

    .expect(errortext.exists).ok()

    .takeScreenshot('ErrorTC003.png')
    .wait(3000);


    const ErrorMessage =await errortext.innerText;


    console.log("LOGIN ERROR MESSAGE ="+ErrorMessage);      
});

test('invalid login credentials TC004', async t => {
    await t
    .maximizeWindow()
    .typeText(usernameInput,'deep33058')
    .typeText(passwordInput, 'Dpk@9893863092')
    .click(loginBtn)

    .expect(errortext.exists).ok()

    .takeScreenshot('ErrorTC004.png')
    .wait(3000);


    const ErrorMessage =await errortext.innerText;


    console.log("LOGIN ERROR MESSAGE ="+ErrorMessage);      
});



