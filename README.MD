# Quiz Manager MVP -01

[Bare React Notes](./REACT.MD)

This is the first MVP for the Quiz Manager.
- Contains a very basic user interface with landing page
- There is a link to the Quiz Manager with a statement to await the next development release


- If the interface is maintained from the beginning, this allows the user to *engage* in the development,
  and factilitate the ability to do *demos* to get feedback and Confirm the progress -`one of the Three CCCs of User Story management`
- it demonstrates the importance of keeping the customer informed and engaged


- This could be a basic demonstration of the *'outside in'* or *'London school'* of development, taking the highest level
  of the development and mocking the internals until they can be replaced with fully functional elements
  - This strategy could be used here; to build out the user interface fully (View element), prior to the work on the Controller and Model
    elements.
  - London school doesn't come naturally to me, as my confidence with mocking capabilities isn't there yet.

The use of Test Driven Development could be seen as an example of *'Outside-In'*, as you are showing the failure of the
higher level functionality, BEFORE the creation of the passing code. Just in very small steps:
- Build test for the anticipated element / function
  - this is the high level expectation (mock of the requirement)
- Build the code to supply the 'mocked' requirement
  - The success of the test is the full replacement of the 'Mock'

To demonstrate TDD; this project implements a few very basic tests:
- check that the initial screen renders (with the link to the application screen)
- fire a *userEvent* (click the link)
  - check that the holding screen is rendered (with the link back to *HOME*)

Due to my current lack of confidence in testing syntax, specifics, etc ... this project will be mainly *Acceptance Tested*.
These tests are primarily based on these MVP stages, comparing the functionality of the produced code, against the practice code
of these MVPs. I will build in specific tests for unit, component, and end 2 end ... to show that I can do them; just not
as efficiently as I would like, for exam conditions.