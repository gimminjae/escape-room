import React, { useState } from 'react'
import cookie from '../hooks/cookie'
import { GiPrisoner } from "react-icons/gi";
import { FaKey } from "react-icons/fa6";


function EscapeRoom() {
    const idList = [
        "086527",
        "095723",
        "101010",
        "103857",
        "104837",
        "204872",
        "209483",
        "294857",
        "402848",
        "593754"
    ]
    const hintList1 = [
        {
            id: 1,
            name: '달력',
            answer: '달력에 대한 힌트입니다.\n강조 표시된 중요해보이는 날짜에 어떤 일정이 있는지 생각해 보세요'
        },
        {
            id: 2,
            name: '일기장',
            answer: '일기장에 대한 힌트입니다.\n일기장에서 반복되고 강조되는 키워드가 있을 것입니다'
        },
        {
            id: 3,
            name: '편지봉투',
            answer: '편지봉투에 대한 힌트입니다.\n편지 봉투 힌트는 가짜 힌트 3개와 진짜 힌트 2개로 구성되어 있습니다.\n봉투 내의 표정으로 진짜와 가짜를 구별할 수 있습니다.'
        },
        {
            id: 4,
            name: '참빛',
            answer: '참빛에 대한 힌트입니다.\n참빛의 모든 페이지 중 가려진 글자들이 있습니다.\n그 글자들을 조합해 보세요'
        }
    ]
    const hintList2 = [
        {
            id: 1,
            name: '1번째',
            answer: '첫번째 자리수에 대한 힌트입니다.\n책상위의 쓰레기통을 살펴보세요'
        },
        {
            id: 2,
            name: '2번째',
            answer: '두번째 자리수에 대한 힌트입니다.\n가고 싶은 나라들을 지도상에서 점을 찍어 연결하면 숫자 하나를 도출할 수 있습니다.'
        },
        {
            id: 3,
            name: '3번째',
            answer: '세번째 자리수에 대한 힌트입니다.\n자료(신문모음집)의 중요한 포인트에 라벨지가 부착되어 있습니다.'
        },
        {
            id: 4,
            name: '4번째',
            answer: '4번째 자리수에 대한 힌트입니다.\n책상 위의 음식들 혹은 과자 쓰레기에 집중해보세요'
        }
    ]

    const [team, setTeam] = useState('')
    const [loginedTeam, setLoginedTeam] = useState(cookie.get('team'))
    const [getHint, setGetHint] = useState(false)
    const [hintFloor, setHintFloor] = useState(0)
    return (
        <>
        {
            !loginedTeam &&
            <div className='container mx-auto w-1/2 flex justify-center align-center'>
                <div>
                <p>팀 아이디를 입력하세요</p>
                <input className='border-solid border-2 border-indigo-600' type="text" value={team} onChange={(e) => setTeam(e.target.value)}/>
                <button className='btn btn-primary mx-5' onClick={() => {
                    cookie.set('team', team)
                    if (!idList.includes(team)) {
                        alert("올바른 팀 아이디가 아닙니다.\n다시 입력해 주세요")
                        return
                    }
                    window.location.href = window.location.href
                }}>Go Go</button>
                </div>
            </div>
        }
        {
            loginedTeam &&
            <div className='container mx-auto w-2/3'>
                <h1 className='text-6xl my-5 flex gap-5'><GiPrisoner />방탈출</h1>
                <p className='my-5'><p className='text-2xl'>{`여러분 안녕하세요`}</p><p className='text-2xl'>방탈출은 총 2개의 단계로 구성되어 있습니다.</p></p>
                <p className='my-5'><p className='text-3xl'>1 단계</p><p className='text-2xl'>다음 지령을 찾아 수행하시오</p></p>
                <div role="alert" class="alert alert-warning">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span><p>💡 다음 사물에 집중</p>달력, 일기장, 편지 봉투, 참빛</span>
                </div>
                <h1 className='my-5'><p className='text-6xl text-[red] flex gap-5 my-3'><FaKey />Hint</p><p className='text-2xl'>1단계, 2단계에 각각 2개씩의 힌트를 획득할 수 있습니다.</p><p className='text-2xl'>한 번 확인한 힌트는 잘 메모해두시기 바랍니다.</p></h1>
                <button className='btn btn-info btn-wide' onClick={() => {
                    setGetHint(prev => !prev)
                    setHintFloor(0)
                }}>힌트 얻기</button>
                {
                    getHint &&
                    <div className='my-5'>
                        힌트를 얻을 단계를 선택하세요
                        <details class="dropdown">
                            <summary class="m-1 btn btn-info">선택</summary>
                            <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li><button onClick={() => {
                                setHintFloor(1)
                                setGetHint(false)
                            }}>1단계</button></li>
                            <li><button onClick={() => {
                                setHintFloor(2)
                                setGetHint(false)
                            }}>2단계</button></li>
                            </ul>
                        </details>
                    </div>
                }
                {
                    hintFloor === 1 &&
                    <div className='my-5'>
                        <h1 className='my-5'>힌트를 얻을 항목을 선택하세요</h1>
                        <div className='flex gap-5'>
                            {
                                hintList1.map(hint => {
                                    return (
                                        <button className='btn btn-primary' onClick={() => {
                                            const inputHint = cookie.get('hint')
                                            if (inputHint.one?.length >= 2) {
                                                alert('1단계 힌트 횟수를 모두 소진하였습니다.')
                                                return
                                            }
                                            let teamsHint;
                                            try {
                                                if (typeof inputHint === 'string') {
                                                    teamsHint = JSON.parse(inputHint);
                                                } else {
                                                    teamsHint = { ...inputHint }
                                                }
                                              } catch (error) {
                                                console.log(error)
                                                teamsHint = {}; // 오류 발생 시 빈 객체 할당
                                              }
                                            alert(hint.answer)
                                            setHintFloor(0)
                                            if (teamsHint.one) teamsHint.one = [ ...new Set([ ...teamsHint.one, hint.id ]) ]
                                            else teamsHint.one = [ hint.id ]

                                            cookie.set('hint', JSON.stringify(teamsHint))
                                        }}>
                                            {hint.id}. {hint.name}
                                        </button>
                                    )
                                })
                            }
                        </div>
                    </div>
                }
                {
                    hintFloor === 2 && 
                    <div className='my-5'>
                        <h1 className='my-5'>힌트를 얻을 자리수를 선택하세요</h1>
                        <div className='flex gap-5'>
                            {
                                hintList2.map(hint => {
                                    return (
                                        <button className='btn btn-primary' onClick={() => {
                                            const inputHint = cookie.get('hint')
                                            if (inputHint.two?.length >= 2) {
                                                alert('2단계 힌트 횟수를 모두 소진하였습니다.')
                                                return
                                            }
                                            let teamsHint;
                                            try {
                                                if (typeof inputHint === 'string') {
                                                    teamsHint = JSON.parse(inputHint);
                                                } else {
                                                    teamsHint = { ...inputHint }
                                                }
                                              } catch (error) {
                                                console.log(error)
                                                teamsHint = {}; // 오류 발생 시 빈 객체 할당
                                              }
                                            alert(hint.answer)
                                            setHintFloor(0)
                                            if (teamsHint.two) teamsHint.two = [ ...new Set([ ...teamsHint.two, hint.id ]) ]
                                            else teamsHint.two = [ hint.id ]

                                            cookie.set('hint', JSON.stringify(teamsHint))
                                        }}>
                                            {hint.name}
                                        </button>
                                    )
                                })
                            }
                        </div>
                    </div>
                }
            </div>
        }
        </>
    )
}
export default EscapeRoom