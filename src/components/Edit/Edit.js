import React from "react";
// Router-dom
import { withRouter } from "react-router-dom";
// Material-ui
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import { green, red } from "@material-ui/core/colors";
import { withStyles, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
// CSS
import "./Edit.css";

const styles = theme => ({
    root: {
        width: "80%",
        margin: "auto",
        "& > *": {
            margin: theme.spacing(1),
            width: "100%"
        }
    },
    mainCard: {
        width: "80%",
        margin: "auto"
    }
});

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: this.props.posts.find(
                post => `:${post.postId}` === this.props.match.params.id
            ),
            isPostValueChanging: false,
            newPostValue: "",
            loginedUser: {},
            buttonDisabled: false,
            commentValue: ""
        };
    }

    componentDidMount() {
        let loginedUser = this.props.users.find(user => user.isOnline === true);

        const buttonDisabled =
            loginedUser.username !== this.username &&
            loginedUser.password !== this.username;

        this.setState({
            loginedUser: loginedUser,
            buttonDisabled: buttonDisabled
        });
    }
    //  CHANGES IS-POST VALUE CHANGING
    editPostValue = () => {
        this.setState({
            isPostValueChanging: true
        });
    };

    // On Post Value change
    onPostValueChange = e => {
        this.setState({ newPostValue: e.target.value });
    };
    // ON done icon click
    handleDoneIconClick = () => {
        const { post, newPostValue } = this.state;
        this.props.history.push("/simple-blog/");
        this.props.handleNewPostValue(
            post.postId,
            newPostValue,
            this.state.post.comments
        );
    };
    // ON delete icon click
    handleDeleteIconClick = () => {
        const { post } = this.state;
        this.props.history.push("/simple-blog/");
        this.props.handlePostsFilter(post.postId);
    };

    // Change comment Value
    commentValue = e => {
        this.setState({
            commentValue: e.target.value
        });
    };
    // Add comment to post
    addComment = () => {
        console.log("post...............", this.state.post.comments);
        const comments = [...this.state.post.comments, this.state.commentValue];
        this.setState(
            {
                post: {
                    ...this.state.post,
                    comments: comments
                }
            },
            console.log("POST ====== ", this.state.post)
        );
    };

    render() {
        const { classes } = this.props;
        const { post, isPostValueChanging, newPostValue } = this.state;
        console.log("POSTS --", this.props.posts);
        console.log("post", this.state.post);
        console.log("Edit State --", this.state);
        console.log("CHANGED VALUE --", newPostValue);
        return (
            <Card className={classes.root}>
                <div className={classes.mainCard}>
                    <CardHeader
                        avatar={
                            <Avatar
                                aria-label="recipe"
                                style={{ backgroundColor: green[300] }}
                            >
                                {post.username}
                            </Avatar>
                        }
                        title={`${post.titleValue} writed by ${post.username} `}
                        subheader={post.time}
                    />
                    <CardContent>
                        {isPostValueChanging ? (
                            <TextField
                                id="outlined-basic"
                                label="Write a post"
                                variant="outlined"
                                defaultValue={post.postValue}
                                onChange={this.onPostValueChange}
                            />
                        ) : (
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                            >
                                {post.postValue}
                            </Typography>
                        )}
                    </CardContent>
                    <div className="edit-btn-container">
                        <CardActions disableSpacing>
                            <IconButton
                                aria-label="share"
                                onClick={this.editPostValue}
                                disabled={this.state.buttonDisabled}
                            >
                                <EditIcon style={{ color: green[500] }} />
                            </IconButton>
                        </CardActions>
                        <CardActions disableSpacing>
                            <IconButton
                                aria-label="share"
                                onClick={this.handleDeleteIconClick}
                                disabled={this.state.buttonDisabled}
                            >
                                <DeleteForeverIcon
                                    style={{ color: red[500] }}
                                />
                            </IconButton>
                        </CardActions>
                        <CardActions disableSpacing>
                            <IconButton
                                aria-label="share"
                                onClick={this.handleDoneIconClick}
                            >
                                <DoneOutlineIcon color="primary" />
                            </IconButton>
                        </CardActions>
                    </div>
                </div>
                <section>
                    <input type="text" onChange={this.commentValue} />
                    <button onClick={this.addComment}>Comment</button>
                    <div>
                        {post.comments.map((comment, index) => {
                            return <div key={index}>{comment}</div>;
                        })}
                    </div>
                </section>
            </Card>
        );
    }
}

export default withStyles(styles)(withRouter(Edit));
