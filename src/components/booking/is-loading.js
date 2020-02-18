import React from 'react'
import { BoxLoading } from 'react-loadingg';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme=>({
    isLoading:{
    texAlign: 'center',
      position: 'relative',
      
    },
          chu:{
            position: 'absolute',
            bottom: '-70px',
            left: '50%',
            transform: 'translate(-50%,0)',
            color:'#9b9b9b',
            fontWeight: '600',
          }
}))

export default function IsLoading(props) {
    const classes = useStyles()
    return (
        <div className={classes.isLoading}>
            <BoxLoading color={'#9b9b9b'}/>
            <p className={classes.chu}>
                Đang tải
            </p>
        </div>
    )
}
