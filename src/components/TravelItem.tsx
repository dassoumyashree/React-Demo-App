import React from 'react';
import { Link } from 'react-router-dom';
import { ITravelItem } from '../types/TravelItemType';

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import TravelItemDetail from './TravelItemDetail'


function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

type AppProp = {
  item: ITravelItem;
}

const TravelItem: React.FC<AppProp> = ({ item }) => {
    return (
      <div>
        <List component="nav" aria-label="main mailbox folders">
        {/* <ListItemLink href={`/${item.planname}`} > */}
        <ListItem button 
          component={Link} 
          to={{pathname: `/${item.planname}`,state: {item}}} 
          style={{textDecoration: 'none', color: '#333'}} 
        >
          <ListItemIcon>
            <FlightTakeoffIcon />
          </ListItemIcon>
          <ListItemText>
            <h3>{item.planname}</h3>
            <p>{item.planheading}</p>
            <p>{item.plandetails}</p>
            <p>Rating: {item.rating}</p>
          </ListItemText>
        </ListItem>
      </List>
      <Divider />
      </div>
      )
      // return (
      //   <ListItem button >
      //     <ListItemIcon>
      //       <FlightTakeoffIcon />
      //     </ListItemIcon>
      //     <Link to={`/${item.planname}`} style={{textDecoration: 'none', color: '#333'}}> 
      //     <div>
      //     <h3>{item.planname}</h3>
      //     <p>{item.planheading}</p>
      //     <p>{item.plandetails}</p>
      //     </div>
      //   </Link>
      //   </ListItem>
      // )
    }
  
    export { TravelItem as default}


    // <Link to={`/${item.planname}`} style={{textDecoration: 'none', color: '#333'}}> 
    //       <h3>{item.planname}</h3>
    //       <p>{item.planheading}</p>
    //       <p>{item.plandetails}</p>
    //     </Link>


    // <ListItem button >
    //       <ListItemIcon>
    //         <FlightTakeoffIcon />
    //       </ListItemIcon>
    //       {/* <Link to={`/${item.planname}`} style={{textDecoration: 'none', color: '#333'}}>  */}
    //       <div>
    //       <h3>{item.planname}</h3>
    //       <p>{item.planheading}</p>
    //       <p>{item.plandetails}</p>
    //       </div>
    //     {/* </Link> */}
    //     </ListItem>