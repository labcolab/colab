import {
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardContent,
  CardMedia,
} from '@material-ui/core';
import React from 'react';
import logo from './../../logo.svg';
import './ProjectBox.css';
import { RoleBox } from '../RoleBox/RoleBox';

interface SmallViewProps {
  // img_src: string;
  // owner: string;
  text: string;
  //roles: RoleList TODO
}

// interface LargeView {

// }

export const SmallView: React.FC<SmallViewProps> = ({ text }) => {
  return (
    <Card className="root">
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className="avatar">
            avatar
          </Avatar>
        }
        title="Username"
        subheader="Publish Date"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <RoleBox />
      <CardMedia className="media" image={logo} title="project image" />
    </Card>
  );
};
