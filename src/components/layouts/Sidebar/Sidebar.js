import React, { useState } from "react";

import { Drawer, IconButton, Divider } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: "nowrap",
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: "hidden",
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up("sm")]: {
			width: theme.spacing(9) + 1,
		},
	},
	toolbar: {
		padding: theme.spacing(0, 1),
		paddingTop: theme.spacing(7),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	},
}));

export const Sidebar = (props) => {
	const { open, setDrawerButton } = props;

	const classes = useStyles();
	const theme = useTheme();

	const handleDrawerButton = () => {
		setDrawerButton(!open);
	};

	return (
		<div>
			<Drawer
				variant="permanent"
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open,
				})}
				classes={{
					paper: clsx({
						[classes.drawerOpen]: open,
						[classes.drawerClose]: !open,
					}),
				}}
			>
				<div className={classes.toolbar}>
					{/* <IconButton onClick={handleDrawerButton}>
						{theme.direction === "rtl" ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton> */}
					<Divider />
					<li>A</li>
					<li>A</li>
					<li>A</li>
					<li>A</li>
					<Divider />
				</div>
			</Drawer>
		</div>
	);
};
