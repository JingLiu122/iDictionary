import React from "react";

import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 36,
	},
	hide: {
		display: "none",
	},
}));

export const Header = (props) => {
	const { open, setDrawerButton } = props;

	const classes = useStyles();

	const handleDrawerButton = () => {
		setDrawerButton(!open);
	};

	return (
		<AppBar
			position="fixed"
			className={clsx(classes.appBar, {
				[classes.appBarShift]: open,
			})}
		>
			<Toolbar variant="dense">
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					onClick={handleDrawerButton}
					className={clsx(classes.menuButton, {
						[classes.hide]: open,
					})}
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" noWrap>
					iDictionary
				</Typography>
			</Toolbar>
		</AppBar>
	);
};
