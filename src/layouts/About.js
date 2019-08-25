import React from 'react';

function About() {
    return (
        <div class="about">
            <h3>
                How does the React Calculator Work?
            </h3>
            <p>
                This calculator was built using the React JavaScript library
                and React Router.  The app is single-page, and allows a user to
                navigate between views without leaving the page.
            </p>
            <h3>
                What components were used to create this calculator, and what 
                do each of the components do individually?
            </h3>
            <p>
                The architecture of the calculator includes six React components.
                Function components were utilized to render page content.  These 
                components include App, Home, About, CalculatorButton, and 
                CalculatorDisplay.
            </p>
            <p>
                A single class-based component was used to set and update state.  
                This class-based component called Calculator encompasses event-listeners on the calculator buttons, an algorithm that handles 
                the evaluation of mathematical equations resulting from button 
                presses, and updating the display on the calculator.
            </p>
            <h3>
                How is arithmetic logic being handled?
            </h3>
            <p>
                The calculator logic incorporates nested conditional
                statements, and error-handling to prevent the app from crashing
                if a user creates non-sensical mathematical expressions.  Under certain
                conditions, add, subtract, multiply, and/or divide functions may
                be called.
            </p>
            <h3>
                Now that you're finished would you refactor how you have organized your 
                components?  List some pro's and con's of your current component tree.
            </h3>
            <p>
                I believe the organization of my components makes sense.  However, if I 
                were to refactor, I would try to find a solution that minimizes the need to 
                repeat code in rendering each of the calculator buttons. In addition, my 
                handleButtonPress method inside my Calculator component is rather long.
            </p>
        </div>
    );
}

export default About;