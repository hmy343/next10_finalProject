import axios from 'axios';
import React, {
  useRef,
  useEffect,
  useState
} from 'react';

const Data = () => {
  const ages = useRef(null);

  useEffect(async () => {
    ages.current = []
    const { data } = await axios.get('http://localhost:9797/search');
    const { age_td_vstr } = data;
    //console.log( age_td_vstr )
    for (let i = 1; i <= 6; i++) {
      let tmp = age_td_vstr.filter(item => item.category == `${i}0대`)
      ages.current.push(tmp)
    }
    console.log(agedata(ages.current))

  }, []);

  const agedata = ages => {
    return {
      name: '연령대별 주요 관광지 방문자 수',
      children: [
        {
          name: '10대',
          children: ages[0]
        },
        {
          name: '20대',
          children: ages[1]
        },
        {
          name: '30대',
          children: ages[2]
        },
        {
          name: '40대',
          children: ages[3]
        },
        {
          name: '50대',
          children: ages[4]
        },
        {
          name: '60대',
          children: ages[5]
        },
      ]
    }
    
  }

  // const sendData = (ages) => {
  //   return (<Ttdata ages={ages}/> )
  // }
  return (
    <>
      <div>

      </div>
    </>

  )

}



export default Data;