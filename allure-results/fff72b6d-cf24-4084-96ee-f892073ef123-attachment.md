# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pom.spec.js >> login using pom pattern
- Location: tests\pom.spec.js:5:5

# Error details

```
Error: page.goto: net::ERR_CONNECTION_TIMED_OUT at https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - strong [ref=e9]: opensource-demo.orangehrmlive.com
      - text: took too long to respond.
    - generic [ref=e10]:
      - paragraph [ref=e11]: "Try:"
      - list [ref=e12]:
        - listitem [ref=e13]: Checking the connection
        - listitem [ref=e14]:
          - link "Checking the proxy and the firewall" [ref=e15] [cursor=pointer]:
            - /url: "#buttons"
        - listitem [ref=e16]:
          - link "Running Windows Network Diagnostics" [ref=e17] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
    - generic [ref=e18]: ERR_CONNECTION_TIMED_OUT
  - generic [ref=e19]:
    - button "Reload" [ref=e21] [cursor=pointer]
    - button "Details" [ref=e22] [cursor=pointer]
```

# Test source

```ts
  1  | class Orange{
  2  |     constructor(page){  //parameter
  3  |         this.page=page;
  4  |         this.user=page.locator('//input[@placeholder="Username"]');
  5  |         this.pass=page.locator('//input[@placeholder="Password"]');
  6  |         this.submit=page.locator('//button[text()=" Login "]');
  7  |     }
  8  | 
  9  |     async navigation(){
> 10 |         await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
     |                         ^ Error: page.goto: net::ERR_CONNECTION_TIMED_OUT at https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
  11 |     }
  12 | 
  13 |     async login(uname,pword){
  14 |         await this.user.fill(uname)
  15 |         await this.pass.fill(pword)
  16 |         await this.submit.click()
  17 |     }
  18 | 
  19 | }
  20 | 
  21 | export default Orange;
```