## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Mock-Up

![The Password Generator application displays a red button to "Generate Password".](./Assets/03-javascript-homework-demo.png)


Website working URL:

https://keinance.github.io/password-generator/



The user shouldn't be able to enter a character length of less than 8 and no greater than 128. I was able to break both of these rules. Think about how you might be able to enforce this rule with an if/else statement and what functions you would need to nest inside of each statement. IF the user selects a number between 8-128, show them the next prompt. ELSE, throw an error alert and keep asking the user for a number between 8-128 until it is satisfied. This, unfortunately, is a 16-point deduction.

This includes a well-written README file with a short description, a live URL link and screenshot of the project, a healthy amount of commits, and a unique repo name. You have all of these besides the deployed URL link in your README file. Make sure to always give the user a chance to check out your projects live! You put a ton of work into this challenge and you don't want that to go to waste(: Also, it's worth mentioning that you should write your own README file rather than using the template. This is because it will set you apart from other developers and give your repo a bit more personality. For the short description, talk about any challenges you faced, how to work the project, and any other details you think are important.

