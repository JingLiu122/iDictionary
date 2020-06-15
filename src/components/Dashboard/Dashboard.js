import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		whiteSpace: "nowrap",
	},
	spacing: {
		padding: theme.spacing(0, 1),
		paddingTop: theme.spacing(7),
	},
}));

export const Dashboard = (props) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container>
				<Grid item xs={12} className={classes.spacing}>
					<Typography>Dashboard Component</Typography>
				</Grid>
			</Grid>
		</div>
	);
};
