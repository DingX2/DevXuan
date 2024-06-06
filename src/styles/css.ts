export const css = {
    ButtonStylePrimary: `
    background-color: #f0ecfc;
    background-image: linear-gradient(315deg, #f0ecfc 0%, #c797eb 74%);
    line-height: 42px;
    padding: 0;
    border: none;
    position: relative;

    span {
      display: block;
      width: 100%;
      height: 100%;
      position: relative;
    }

    &:before,
    &:after,
    span:before,
    span:after {
      position: absolute;
      content: "";
      background: #c797eb;
      transition: all 0.3s ease;
    }

    &:before {
      right: 0;
      bottom: 0;
      width: 2px;
      height: 0%;
    }

    &:after {
      right: 0;
      bottom: 0;
      width: 0%;
      height: 2px;
    }

    &:hover:before {
      height: 100%;
    }

    &:hover:after {
      width: 100%;
    }

    &:hover {
      background: transparent;
    }

    span:hover {
      color: #c797eb;
    }

    span:before {
      left: 0;
      top: 0;
      width: 2px;
      height: 0%;
    }

    span:after {
      left: 0;
      top: 0;
      height: 2px;
      width: 0%;
    }

    span:hover:before {
      height: 100%;
    }

    span:hover:after {
      width: 100%;
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
