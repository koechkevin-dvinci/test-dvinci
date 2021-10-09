import Button from './components/Button';
import ManagementCard, {
  PageHeader,
  FooterComponent as CardFooter,
  BodyComponent as CardBody,
  HeaderComponent as CardHeader,
} from './components/ManagementCard';
import Search from './components/Search';
import Modal from './components/Modal';
import { Tabs, Tab, TabPanel } from './components/Tabs';
import SelectComponent from './components/Select';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { AddNewMember, MemberListItem } from './components/AddNewMembers';
import { createCustomTheme, baseOptions, themesOptions, theme } from './theme';
import { StepLabel } from './components/StepLabel';
import { OTPInput } from './components/OTPComponent';

import {
  TableRow,
  TableFooter,
  Table,
  TableContainer,
  TableBody,
  TablePagination,
  TableHead,
  TableCell,
} from './components/Table';
import Checkbox from './components/Checkbox';
import { UserAccessComponent, UserTable } from './components/UsersList';
import Input, { MaskedInput } from './components/Input';
import { THEMES, userAccessOptions } from './constants';
import { UserDetail } from './components/UserDetailComponent';
import {
  ListItemAvatar as MuiListItemAvatar,
  ListItemText as MuiListItemText,
  Avatar as MuiAvatar,
  ListItem as MuiListItem,
  List as MuiList,
} from '@material-ui/core';

import { SelectMenu } from './components/SelectMenu';

export {
  Button,
  ManagementCard,
  Search,
  Modal,
  Tabs,
  Tab,
  TabPanel,
  PageHeader,
  SelectComponent as Select,
  parse,
  match,
  AddNewMember,
  TableRow,
  TableFooter,
  Table,
  TableContainer,
  TableBody,
  TablePagination,
  TableHead,
  TableCell,
  Checkbox,
  UserAccessComponent,
  Input,
  UserTable,
  THEMES,
  userAccessOptions,
  createCustomTheme,
  baseOptions,
  themesOptions,
  UserDetail,
  theme,
  MuiListItemAvatar,
  MuiListItemText,
  MuiListItem,
  MuiAvatar,
  MemberListItem,
  MuiList,
  CardHeader,
  CardBody,
  CardFooter,
  SelectMenu,
  MaskedInput,
  StepLabel,
  OTPInput,
};
