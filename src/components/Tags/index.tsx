import classes from './Tags.module.scss';
import { tags } from '../../constants';
import { FC } from 'react';
import { useAppContext } from '../../hooks';
import { ITag } from '../../types';


export const Tags:FC = () => {

  const {setUrl,activeTag,setActiveTag} = useAppContext();

  const setActiveClass = (tag:string) => {
    return tag === activeTag ? `${classes.activeTag}` : "";
  }

  const handleClickTag = async (tag:ITag) => {
    setActiveTag(tag);
    const tagToLowerCase = tag.toLowerCase();
    if(tagToLowerCase === "all"){
      setUrl("?status=suggestion");
      return
    }
    setUrl(`?status=suggestion&category=${tagToLowerCase}`);
  }

  return (
    <ul className={classes.tags}>
        {tags.map(tag => <li onClick={() => handleClickTag(tag)} className={setActiveClass(tag)} key={tag}>{tag}</li>)}
    </ul>
  )
}
