import { Skills, skillsCategory } from '@/src/constant/interfaces'
import { FC } from 'react'

interface Skill extends Skills{}

const getSkillsComp: FC<Skill> = ({}) => {
    
  return <div>getSkillsComp</div>
}

export default getSkillsComp