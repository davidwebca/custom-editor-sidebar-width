import { registerPlugin } from '@wordpress/plugins';
import { Fragment, Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/edit-post';
import domReady from '@wordpress/dom-ready';
import { 
    RangeControl, 
    Panel,
    PanelBody,
    PanelRow
} from '@wordpress/components';
import {
    loadPromise,
    models
} from '@wordpress/api';
import { debounce } from 'lodash';

let initialWidthValue = 280;
let current_user = null;

loadPromise.then( () => {
    current_user = new models.UsersMe();
    current_user.fetch().then( (response) => {
        if(response.meta.editor_width) {
            initialWidthValue = response.meta.editor_width;
            document.documentElement.style.setProperty('--cesw-sidebar-width', response.meta.editor_width + 'px');
        }
    });
});

class SidebarWidthRangeControl extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            value: props.initialValue
        }

        this.debouncedSave = debounce( (width) => {
            let model = new models.UsersMe({
                meta: {
                    'editor_width':width
                }
            });
            model.save().then( (response) => {
                this.setState({value:response.meta.editor_width})
                initialWidthValue = response.meta.editor_width;
            })
            this.setWidth(width);
        }, 500)
    }

    componentDidMount() {
        loadPromise.then( () => {
            let current_user = new models.UsersMe();
            current_user.fetch().then( (response) => {
                if(response.meta.editor_width) {
                    this.setState({value:response.meta.editor_width})
                    this.setWidth(response.meta.editor_width)
                }
            })
        })
    }

    setWidth(width) {
        document.documentElement.style.setProperty('--cesw-sidebar-width', width + 'px');
    }

    render() {
        return (<RangeControl
            label="Width"
            onChange={ (width) => {
                this.setState({value:width})
                this.debouncedSave(width);
            } }
            value={ this.state.value }
            min={ 280 }
            max={ 680 }
        />)
    }
}

let arrow_icon = <svg width="33" height="18" viewBox="0 0 33 18"><path d="M21.183 12.174H11.97v4.39a.64.64 0 0 1-1.044.494L.824 9.208a.639.639 0 0 1-.113-.896C3.042 5.981 8.1 2.545 10.939.339a.639.639 0 0 1 1.03.504l.002 4.39h9.212V.843a.64.64 0 0 1 1.044-.494l10.103 7.85a.639.639 0 0 1 .113.896c-2.33 2.33-7.39 5.767-10.228 7.973a.64.64 0 0 1-1.03-.505l-.002-4.389z"/></svg>;

 
const CustomSidebarWidthPlugin = () => (
    <Fragment>
        <PluginSidebarMoreMenuItem target="plugin-sidebar-width" icon={ arrow_icon }>
        {__("Sidebar width", "sidebarwidth")}
        </PluginSidebarMoreMenuItem>
        <PluginSidebar name="plugin-sidebar-width" title={ __("Sidebar width", "sidebarwidth") } icon={ arrow_icon }>
            <Panel>
                <PanelBody>
                    <SidebarWidthRangeControl initialValue={initialWidthValue}></SidebarWidthRangeControl>
                </PanelBody>
            </Panel>
        </PluginSidebar>
    </Fragment>
);
 
registerPlugin( 'plugin-sidebar-width', { render: CustomSidebarWidthPlugin } );