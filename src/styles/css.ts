export const css = {
    ButtonStylePrimary: ` cursor: pointer;
    font: inherit;
    margin: 0;
    padding: 0;
    
    background-color: #404663;
    color: #fff;
    border: 0;
    font-size: 2rem;
    font-weight: 400;
    padding: 0.5em 1.25em;
    border-radius: 0.5em;
    z-index: 999;
    position: relative;
    display: flex;
    gap: 0.5em;
    box-shadow: 
      0px 1.7px 2.2px rgba(0, 0, 0, 0.02),
      0px 4px 5.3px rgba(0, 0, 0, 0.028),
      0px 7.5px 10px rgba(0, 0, 0, 0.035),
      0px 13.4px 17.9px rgba(0, 0, 0, 0.042),
      0px 25.1px 33.4px rgba(0, 0, 0, 0.05),
      0px 60px 80px rgba(0, 0, 0, 0.07);
  
    &:active {
      transform: scale(1.01);
    }
  `,
    ButtonStyleSecondary: `
    background: linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%);
    line-height: 42px;
    padding: 0;
    border: none;
    color: #fff;

    span {
      position: relative;
      display: block;
      width: 100%;
    }

  &:before,
  &:after {
    position: absolute;
    content: "";
    height: 0%;
    width: 1px;
    box-shadow: 
      -1px -1px 20px 0px rgba(255,255,255,1),
      -4px -4px 5px 0px rgba(255,255,255,1),
      7px 7px 20px 0px rgba(0,0,0,.4),
      4px 4px 5px 0px rgba(0,0,0,.3);
  }

  &:before {
    right: 0;
    top: 0;
    transition: all 500ms ease;
  }

  &:after {
    left: 0;
    bottom: 0;
    transition: all 500ms ease;
  }

  &:hover {
    background: transparent;
    color: #76aef1;
    box-shadow: none;
  }

  &:hover:before {
    transition: all 500ms ease;
    height: 100%;
  }

  &:hover:after {
    transition: all 500ms ease;
    height: 100%;
  }

  span:before,
  span:after {
    position: absolute;
    content: "";
    box-shadow: 
      -1px -1px 20px 0px rgba(255,255,255,1),
      -4px -4px 5px 0px rgba(255,255,255,1),
      7px 7px 20px 0px rgba(0,0,0,.4),
      4px 4px 5px 0px rgba(0,0,0,.3);
  }

  span:before {
    left: 0;
    top: 0;
    width: 0%;
    height: .5px;
    transition: all 500ms ease;
  }

  span:after {
    right: 0;
    bottom: 0;
    width: 0%;
    height: .5px;
    transition: all 500ms ease;
  }

  span:hover:before {
    width: 100%;
  }

  span:hover:after {
    width: 100%;
  }
`,
};
