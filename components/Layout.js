import { Drawer, List, ListItem, ListItemIcon, makeStyles, Typography } from "@material-ui/core"
import { SubjectOutlined, AddCircleOutlineOutlined } from '@material-ui/icons'
import { useRouter } from "next/dist/client/router"

const drawerWidth = 120
const drawerHeight = 2069
const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: 'flex'
        },
        drawer: {
            
            width: drawerWidth,
            
        },
        bgColor:{
            backgroundColor: '#663399',
            height: drawerHeight
        }
    }
})
const Layout = ({ children }) => {
    const classes = useStyles()
    const router = useRouter()
    const menuIcons = [
        {
            icon: <SubjectOutlined color="secondary" />,
            path: "/"
        },
        {
            icon: < AddCircleOutlineOutlined color="secondary" />,
            path: "/add"
        }
    ]
    return (
        <div className={classes.root}>
            <div>
                <Drawer className={classes.drawer} variant="permanent" anchor="left">
                    {/* <div>
                        <Typography variant="h3">Icons</Typography>
                    </div> */}
                    {/* list icon links */}
                    <List className={classes.bgColor}>
                        {menuIcons.map(item => (
                            <ListItem
                                button
                                key={item.path}
                                onClick={() => router.push(item.path)}
                            >
                                <ListItemIcon >{item.icon}</ListItemIcon>
                            </ListItem>
                        ))}
                    </List>

                </Drawer>
            </div>
            <div>
                {children}
            </div>
        </div>);
}

export default Layout;