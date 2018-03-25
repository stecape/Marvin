import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import FontIcon from 'react-md/lib/FontIcons';
import ListItems from './ListItems';
import Home from './pages/Home/Home';

export default class App extends Component {
  loading() {
    return <div className="loading">Loading...</div>;
  }

  getView() {

    this.navItems = ListItems.map((item) => {
      if (item.divider) {
        return item;
      }
      return {
        ...item
      };
    });
    return (
    	<NavigationDrawer
        toolbarTitle="Marvin"
        navItems={this.navItems}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
        tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
        desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
        temporaryIcon={<FontIcon>menu</FontIcon>}
        persistentIcon={<FontIcon>arrow_back</FontIcon>}
      >
        <section>
          <main>
            <Home />
          </main>
        </section>
      </NavigationDrawer>
    )
  }

  render() {
    return <div className="app-root">
      <div className="container">
        {this.getView()}
      </div>
    </div>;
  }
}
