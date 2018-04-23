import 'javascripts/application'
import 'stylesheets/application'
require.context('images', true, /\.(png|jpg|jpeg|svg)$/)

// Support component names relative to this directory:
var componentRequireContext = require.context("components", true)
var ReactRailsUJS = require("react_ujs")
ReactRailsUJS.useContext(componentRequireContext)

import Rails from 'rails-ujs';
Rails.start();
