import React, { Component } from 'react'
import BaseIcon from '../IconBase'

export default class IconPinterestLine extends Component {
  render() {
    return (
      <BaseIcon
        {...this.props}
        name="IconPinterestLine"
        viewBox="0 0 1920 1920">
        
    <defs>
        <path d="M1600.02 0H319.98C143.25.033 0 143.31 0 320.04v1279.92A319.98 319.98 0 0 0 319.98 1920h1280.04c176.73-.033 319.98-143.31 319.98-320.04V320.04A319.98 319.98 0 0 0 1600.02 0zM921.696 1140.756c-29.705 154.203-43.864 216.361-151.266 293.58-33.164-233.064 26.524-322.479 64.568-508.254-64.906-108.04 7.77-325.576 144.498-271.907 168.186 65.912-145.683 401.715 65.047 443.655 220.064 43.723 309.842-378.118 173.493-515.244-197.086-198.067-573.823-4.504-527.536 279.132 11.275 69.29 83.619 90.307 28.9 186.01-126.164-27.68-163.828-126.196-158.996-257.553 7.865-215.095 195.19-365.64 383.038-386.422 237.593-26.27 460.594 86.32 491.388 307.75 34.68 249.764-107.26 520.264-361.34 500.842-68.932-5.348-97.832-39.125-151.794-71.59z" id="a"/>
        <mask id="b" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="1920" height="1920">
            <use xlinkHref="#a"/>
        </mask>
    </defs>
    <use mask="url(#b)" xlinkHref="#a" stroke="#757575" strokeWidth="320" fillRule="evenodd"/>

      </BaseIcon>
    )
  }
}