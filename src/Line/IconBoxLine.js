import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconBoxLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconBoxLine"
        viewBox="0 0 1920 1920"
      >
        <svg version="1.1" viewBox="0 0 1920 1920">
	<path d="M1468.235 0v112.941H451.765V0H0v451.878h112.941v1016.47H0V1920h451.765v-112.941h1016.47V1920h451.878v-451.652h-112.941V451.878h112.94V0h-451.877zm113.054 338.824h225.883V112.94h-225.883v225.883zm-1468.348 0h225.883V112.94H112.94v225.883zm112.941 113.054h225.883V225.882h1016.47v225.996h225.996v1016.47h-225.996v225.77H451.765v-225.77H225.882V451.878zm1355.407 1355.18h225.883v-225.882h-225.883v225.883zm-1468.348 0h225.883v-225.882H112.94v225.883z" stroke="none" strokeWidth="1"/>
</svg>
      </SVGIcon>
    )
  }
}