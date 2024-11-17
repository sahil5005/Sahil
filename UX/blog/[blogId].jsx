import styles from '../../styles/showBlog.module.css';
import { HeartOutlined, ShareAltOutlined, BookOutlined } from '@ant-design/icons';
import { FaHeart, FaBookmark, FaEllipsisV } from 'react-icons/fa';


// can use this after like = {red heart}

// <button
// style={{ border: 'none', background: 'none', cursor: 'pointer' }}
// >
// <FaHeart size={24} color="red" />
// </button>


// can use this after save = {saved}

// <button
// style={{ border: 'white', background: 'black', cursor: 'pointer' }}
// >
// <FaBookmark size={24} />
// </button>


const showBlog = () => {

    const userName = 'userName';
    const name = 'name';
    const blogTitle = 'First Blog';
    const blogContent = 'Hello, my name is user\nDA-IICT\nHello, my name is user\nDA-IICT\nHello, my name is user\nDA-IICT\nHello, my name is user\nDA-IICT\nHello, my name is user\nDA-IICT\nHello, my name is user\nDA-IICT\n';
    const likeCount = 0;

    const handleLike = () => {

    };

    const handleShare = () => {
    };

    const handleSave = () => {

    };

    const handleCommentSend = () => {

    };

    const handleDotBtn = () => {

    };

    const comments = [
        { user: "user1", comment: "comment1" },
        { user: "user2", comment: "comment2" },
        { user: "user3", comment: "comment3" },
        { user: "user4", comment: "comment4" },
        { user: "user5", comment: "comment5" },
        { user: "user6", comment: "comment6" },
        { user: "user7", comment: "comment7" },
        { user: "user8", comment: "comment8" },
        { user: "user9", comment: "comment9" },
        { user: "user10", comment: "comment10" },
    ];

    return (
        <div className={styles.blogContainer}>
            <div className={styles.leftSection}>
                <div className={styles.blogSection}>
                    <h1 className={styles.blogTitle}>{blogTitle}</h1>
                    <p className={styles.blogContent}>{blogContent}</p>
                </div>
            </div>


            {/* Static Author Section */}
            <div className={styles.rightSection}>
                <div className={styles.aboutBlog}>
                    <div className={styles.authorName}>
                        <h2>Author</h2>
                    </div>
                    <div className={styles.authorInfo}>
                        <div className={styles.authorAvatar}>👤</div>
                        <div className={styles.authorDetails}>
                            <p>@{userName}</p>
                            <p>{name}</p>
                        </div>
                        <div className={styles.btnSection}>
                            <button className={styles.followBtn}>Follow</button>
                        </div>
                    </div>

                    {/* Comments Section */}
                    <div className={styles.commentsSection}>
                        <div className={styles.barSection}>
                            {comments.map((item, index) => (
                                <div key={index} className={styles.commentInfo}>
                                    <div className={styles.cntAvatar}>👤</div>
                                    <div className={styles.comment}>
                                        <p className={styles.uName}>@{item.user}</p>
                                        <p className={styles.uComment}>{item.comment}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Comment Input */}
                        <div className={styles.commentInput}>
                            <input type="text" placeholder="Comment..." />
                            <button className={styles.sendBtn} onClick={handleCommentSend}>send</button>
                        </div>
                    </div>

                    {/* Blog Footer */}
                    <div className={styles.likeSave}>
                        <button
                            style={{
                                border: 'white',
                                cursor: 'pointer',
                                fontSize: '32px',
                            }}
                            onClick={handleLike}
                        >
                            <HeartOutlined />
                        </button>

                        <p>{likeCount} likes</p>

                        <button
                            style={{
                                border: 'white',
                                cursor: 'pointer',
                                fontSize: '32px',
                            }}
                        >
                            <ShareAltOutlined />
                        </button>

                        <button
                            style={{
                                border: 'white',
                                cursor: 'pointer',
                                fontSize: '32px',
                            }}
                        >
                            <BookOutlined />
                        </button>
                    </div>

                    <button
                        style={{
                            border: 'white',
                            cursor: 'pointer',
                            fontSize: '28px',
                            marginTop: '15px',
                        }}
                    >
                        <FaEllipsisV />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default showBlog;
