# playwright-login-session using CLI command
This is sample repo where it shows how to manage login session

1. Clone the repo
2. Install required packages
3. Goto `tests` dir
4. Enter this command from CLI **npx playwright codegen --save-storage=auth.json**
5. This will initiate new browser session and perform the login steps.
6. Once done with login, do not logout but close the browser and cookies and session can stored in json file.
7. This will generate `auth.json` file in `tests` dir
8. Now, create a new test and add below code in the beginging of the test
```
test.use({
    storageState: 'auth.json'
  });
```
7. This should run successfully with logged in mode.

 
