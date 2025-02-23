import React from 'react';
import PropTypes from 'prop-types';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTranslation } from 'next-i18next';
import linkRouter from 'public/text/link';
import useStyles from './header-style';
import navMenu from './menu';

function MobileMenu(props) {
  const { classes, cx } = useStyles();
  const { toggleDrawer, open } = props;
  const { t, i18n } = useTranslation('common');
  const curLang = '/' + i18n.language;

  const SideList = () => (
    <div
      className={classes.mobileNav}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <div className={cx(classes.menu, open && classes.menuOpen)}>
        <List component="nav">
          {navMenu.map((item, index) => (
            <ListItem
              button
              component="a"
              href={`#${item}`}
              key={item}
              index={index.toString()}
              style={{ animationDuration: index * 0.15 + 's' }}
            >
              <ListItemText
                primary={t('header_' + item)}
                className={classes.menuList}
              />
            </ListItem>
          ))}
          <ListItem
            button
            component="a"
            href={curLang + linkRouter.mobile.pricing}
            style={{ animationDuration: navMenu.length * 0.15 + 's' }}
          >
            <ListItemText
              primary={t('header_pricing')}
              className={classes.menuList}
            />
          </ListItem>
          <ListItem
            button
            component="a"
            href={curLang + linkRouter.mobile.blog}
            style={{ animationDuration: navMenu.length * 0.15 + 's' }}
          >
            <ListItemText
              primary={t('header_blog')}
              className={classes.menuList}
            />
          </ListItem>
          <ListItem
            button
            component="a"
            href={curLang + linkRouter.mobile.contact}
            style={{ animationDuration: navMenu.length * 0.15 + 's' }}
          >
            <ListItemText
              primary={t('header_contact')}
              className={classes.menuList}
            />
          </ListItem>
        </List>
      </div>
    </div>
  );

  return (
    <SwipeableDrawer
      open={open}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
      classes={{
        paper: classes.paperNav
      }}
    >
      <SideList />
    </SwipeableDrawer>
  );
}

MobileMenu.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default MobileMenu;
