# react-smart-sidebar

Professional, customizable React sidebar component for your website.
* Fixed to left side of screen
* Colors fully customizable
* Disappears with button press
* Extends/collapses when mouse hovers over / leaves.

# Installation

```

npm install @johnamii/react-smart-sidebar

import { Sidebar, Group, Tab, Divider } from '@johnamii/react-smart-sidebar'

```

![example_def](./screenshots//sidebar-example-compressed.png?raw=true "Default") 
![example_ext](./screenshots//sidebar-example-extended.png?raw=true "Extended (on hover)")
![example_hid](./screenshots//sidebar-example-hidden.png?raw=true "Hidden")

# Components

**Sidebar** is required, the main component.

**Group** is an optional collapsible container within the sidebar with a title and tabs

**Tab** is an optional icon button to put links for functions. Does not need to be placed in group.

**Divider** is an optional bar that aesthetically separates items.

# Example

```

<SideBar >
    <Group name="ABOUT">
        <Tab name='About Me' img={logos.logoDark} onClick={() => popupClick()}/>
        <Tab name='GitHub' img='/github-light.png' url='https://github.com/USERNAME' />
    </Group>

    <Divider/>

    <Tab name ='PROJECT1' url="https://github.com/PROJECT1" img='/PROJECT1.png'/>
    <Tab name ='PROJECT2' url="https://github.com/PROJECT2" img='/PROJECT2.png'/>
</SideBar>

```

# Options

**Sidebar**
 * background: change the background color of the whole sidebar
 * size: changes the fontsize within the sidebar--changes size of items and thus of the whole bar

**Group**
 * name (REQUIRED): Title for the group
 * accent: Color of title and grouping
 * borderVisible: Boolean whether to show separating border above/below group

**Tab**
 * name: (REQUIRED) Name of the tab, visible when bar is extended.
 * img: (REQUIRED) Icon image of the tab, whatever you're linking to
 * url: Link that clicking on the tab opens
 * onClick: Option for what happens when Tab is clicked
 * accent: Color of the border of the tab
 * background: Color of the background behind the tab icon

**Divider**
 * background: Color of the divider bar

