import SectionCommentItem from '../SectionCommentItem';
import './style.css'
export default function SectionComment(){
    return(
        <div className="container-section-comments">
           <h1 className='section-comments-title'>O que estão dizendo</h1> 
           <SectionCommentItem/>
           <SectionCommentItem/>
           <SectionCommentItem/>
           <SectionCommentItem/>
           <SectionCommentItem/>
        </div>
    );
}