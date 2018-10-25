/*
Page.js
 
- AEMSPA specific implementation of Page
- Maps to aemspa/components/structure/page
*/
 
import {Page, MapTo, withComponentMappingContext } from "@adobe/cq-react-editable-components";
require('./Page.css');
// This component is a variant of a React Page component mapped to the "structure/page" resource type
// No functionality is changed other than to add an app specific CSS class
class sdPage extends Page {
 
    get containerProps() {
        let attrs = super.containerProps;
        attrs.className = (attrs.className || '') + ' sdPage ' + (this.props.cssClassNames || '');
        return attrs
    }
}
 
MapTo('wknd-events/components/structure/page')(withComponentMappingContext(sdPage));