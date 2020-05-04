import styled from "styled-components";

export const Buttons = (props) => {
<ButtonStyling>
<div className="row">
  <button
    className={`button button-primary button-primary-${
      isActive ? "active" : "inactive"
    }`}
    onClick={toggle}
  >
    {isActive ? "Pause" : "Start"}
  </button>
  <button className="button" onClick={reset}>
    Reset
  </button>
</div>
</ButtonStyling>
}

const ButtonStyling = styled.div`
        .button {
          padding: 0.6rem 1.5rem;
          margin: 0.4rem;
          border-radius: 30px;
          text-transform: uppercase;
          font-weight: 600;
          font-size: 0.8rem;
        }

        .row {
          text-align: center;
        }

        .button:focus {
          outline-width: 0;
        }

        .button-primary:hover {
          background-color: var(--lightGray);
          border: 2px solid var(--darkGray);
        }

        .button-primary-active {
          background-color: var(--lightPink);
          border: 2px solid var(--darkPink);
          color: white;
        }

        .button-primary-inactive {
          background-color: var(--lightPink);
          border: 2px solid var(--darkPink);
          color: white;
        }
`