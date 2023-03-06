import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { API } from '../../service';
import { ACTIVITIES, SPEND_ANALYSIS, MOCK_AMOUNT } from '../../model';
import Pagination from '../pagination';
import Food from '../../assets/svg/food.svg';
import Gold from '../../assets/svg/gold.svg';

const Activities: React.FC = () => {
  const [postsList, setPostsList] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(false);

  const getList = useCallback(async (page?: string) => {
    try {
      const listOfPosts = await API.getPosts(page ? page : '1');
      if (listOfPosts) {
        setPostsList(listOfPosts);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handlePagerClick = async (event?: React.MouseEvent<HTMLElement>) => {
    const activePager = (event?.target as HTMLButtonElement)?.getAttribute(
      'data-attribute'
    );

    getList(activePager ? activePager : '1');
  };

  useEffect(() => {
    if (loading) {
      getList().catch(console.error);
    }

    setLoading(true);
  }, [loading]);

  return (
    <section className='activities'>
      <div className='activities__head'>
        <div className='activities__title'>{ACTIVITIES}</div>
        <Link to='#spending-analysis' className='activities__link'>
          {SPEND_ANALYSIS}
        </Link>
      </div>
      <div className='activities__wrapper'>
        {postsList &&
          postsList.map((post: IPost, index: number) => {
            if (index < 3) {
              return (
                <div className='activities__item' key={post.id}>
                  <div className='activities__item__left'>
                    {post.name && post.name.length > 35 ? (
                      <div className='activities__icon icon--gold'>
                        <img src={Gold} className='icon' alt='activity' />
                      </div>
                    ) : (
                      <div className='activities__icon icon--food'>
                        <img src={Food} className='icon' alt='activity' />
                      </div>
                    )}
                    <div className='activities__item__left__wrapper'>
                      <span className='activities__small-title'>
                        {post.name}
                      </span>
                      <p className='activities__description'>{post.email}</p>
                    </div>
                  </div>
                  <div className='activities__item__right'>
                    <span
                      className={`activities__item__right__amount ${
                        post.name && post.name.length > 35
                          ? 'in--money'
                          : 'out--money'
                      }`}
                    >
                      {MOCK_AMOUNT}
                    </span>
                    <span className='activities__item__right__time'>
                      {post.id ? `${2 * post.id} saat önce` : null}
                    </span>
                  </div>
                </div>
              );
            }
          })}
        <Pagination
          className='activities__pagination'
          division={4}
          pagerClick={handlePagerClick}
        />
      </div>
    </section>
  );
};

export default Activities;

export interface IPost {
  body?: string;
  email?: string;
  id?: number;
  name?: string;
  postId?: number;
}
