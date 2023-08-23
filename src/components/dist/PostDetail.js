"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var swr_1 = require("swr");
var ActionBar_1 = require("./ActionBar");
var CommentForm_1 = require("./CommentForm");
var PostUserProfile_1 = require("./ui/PostUserProfile");
var Profile_1 = require("./ui/Profile");
function PostDetail(_a) {
    var post = _a.post;
    var id = post.id, userImage = post.userImage, username = post.username, image = post.image, createdAt = post.createdAt, likes = post.likes;
    var data = swr_1["default"]("/api/post/" + id).data;
    var comments = data === null || data === void 0 ? void 0 : data.comments;
    return (React.createElement("section", { className: 'flex w-full h-full' },
        React.createElement("div", { className: 'relative basis-3/5' },
            React.createElement(image_1["default"], { className: 'object-cover rounded-tl-3xl rounded-bl-3xl', src: image, alt: "photo by " + username, priority: true, fill: true, sizes: '650px' })),
        React.createElement("div", { className: 'w-full basis-2/5 flex flex-col' },
            React.createElement(PostUserProfile_1["default"], { image: userImage, username: username }),
            React.createElement("ul", { className: 'border-t border-gray-200 h-full overflow-y-auto p-4 mb-1' }, comments &&
                comments.map(function (_a, index) {
                    var image = _a.image, commentUsername = _a.username, comment = _a.comment;
                    return (React.createElement("li", { key: index, className: 'flex items-center mb-1' },
                        React.createElement(Profile_1["default"], { image: image, size: 'small' }),
                        React.createElement("div", { className: 'ml-2' },
                            React.createElement("span", { className: 'font-bold mr-3' }, commentUsername),
                            React.createElement("span", null, comment))));
                })),
            React.createElement(ActionBar_1["default"], { likes: likes, username: username, createdAt: createdAt }),
            React.createElement(CommentForm_1["default"], null))));
}
exports["default"] = PostDetail;