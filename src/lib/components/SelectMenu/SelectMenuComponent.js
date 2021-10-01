import React, { useRef, useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { IconButton, makeStyles, Menu, MenuItem, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { styles } from './SelectMenuStyles';
import PropTypes from 'prop-types';

const SelectMenuComponent = (props) => {
  const { value, onChange, renderValue, options = [], style, size, groupBy, renderGroupName } = props;
  const [ref, setRef] = useState();
  const [open, setOpen] = useState(!!ref && false);
  const [hover, setHover] = useState(false);

  const cont = useRef();

  const useStyles = makeStyles((theme) => ({
    ...styles(theme),
    popoverPaper: {
      width: cont?.current?.offsetWidth,
    },
  }));
  const classes = useStyles();

  const [selected, setSelected] = useState(value);
  const customSize = size || 'medium';
  const handleClick = () => {
    setOpen(!open);
  };

  const groupedOptions = {};

  if (groupBy) {
    options.forEach((opt) => {
      const group = groupBy(opt);
      groupedOptions[group] = [...(groupedOptions[group] || []), opt];
    });
  }

  const onClickItem = (ev, onClick) => {
    if (onClick) {
      onClick(ev);
    }
    if (onChange) {
      onChange(ev);
    }
    setSelected(ev);
    setOpen(false);
  };

  return (
    <Box ref={cont} onMouseLeave={() => setHover(false)} onMouseEnter={() => setHover(true)}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        className={`${classes.root} ${open ? classes.open : ''}`}
        style={{
          ...style,
          height: customSize === 'small' ? 40 : 56,
        }}
      >
        <Box role="button" onClick={handleClick} display="flex" alignItems="center" style={{ flex: 1, height: '100%' }}>
          {renderValue(selected || value || {})}
        </Box>
        {selected?.label && hover && (
          <IconButton onClick={() => onClickItem({})}>
            <CloseIcon className={classes.icon} />
          </IconButton>
        )}
        <IconButton onClick={handleClick}>
          <ArrowDropDownIcon className={classes.icon} />
        </IconButton>
      </Box>
      <div style={{ top: 48, position: 'relative', width: cont?.current?.offsetWidth }} ref={setRef} />
      <Menu
        PopoverClasses={{ paper: classes.popoverPaper }}
        anchorEl={ref}
        open={open}
        onClose={() => setOpen(false)}
        MenuListProps={{
          dense: true,
        }}
      >
        {groupBy
          ? Object.keys(groupedOptions).map((group) => {
              return [
                <Box key={group} style={{ paddingLeft: 16, paddingRight: 16 }}>
                  {renderGroupName?.(group) || (
                    <Typography color="primary" key={group}>
                      {group}
                    </Typography>
                  )}
                </Box>,
                ...groupedOptions[group].map((option, index) => {
                  const { label, onClick, menuItemProps } = option;
                  return (
                    <MenuItem onClick={() => onClickItem(option, onClick)} key={index} {...menuItemProps}>
                      {label}
                    </MenuItem>
                  );
                }),
              ];
            })
          : options.map((option, index) => {
              const { label, onClick, menuItemProps } = option;
              return (
                <MenuItem onClick={() => onClickItem(option, onClick)} key={index} {...menuItemProps}>
                  {label}
                </MenuItem>
              );
            })}
      </Menu>
    </Box>
  );
};

SelectMenuComponent.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func,
  renderValue: PropTypes.func,
  options: PropTypes.array,
  style: PropTypes.object,
  size: PropTypes.string,
  groupBy: PropTypes.func,
  renderGroupName: PropTypes.func,
};

export default SelectMenuComponent;
