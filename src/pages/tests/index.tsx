import PageHead from 'src/components/layouts/PageHead'
import useGoToPage from 'src/hooks/useGoToPage'
import styled from 'styled-components'

export const TestSelectImg = styled.img`
  width: 250px;
  height: 150px;
  margin: 6px;
  padding: 6px;
  display: block;
  :hover {
    background-color: black;
  }
`

const RelativePosition = styled.div`
  position: relative;
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  :hover {
    > text {
      animation-name: fadeIn;
      animation-duration: 2.4s;
    }
    > img {
      animation-name: fadeOut;
      animation-duration: 2.4s;
    }
  }
`

const TestExplainText = styled.text`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  font-size: 1.4rem;
`

const TestSelectGridContainer = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin: 0;
  padding: 0;
`

const description = '테스트 목록을 확인해보세요'

function TestsPage() {
  const goToTestFisrtTest = useGoToPage('/tests/Test_1')
  const goToTestSecondTest = useGoToPage('/tests/Test_2')
  const goToTestThirdTest = useGoToPage('/tests/Test_3')
  const goToTestFourthTest = useGoToPage('/tests/Test_4')

  return (
    <PageHead title="심리테스트 - 테스트 목록" description={description}>
      <h1>원하는 테스트를 골라보세요</h1>
      <TestSelectGridContainer>
        <RelativePosition>
          <TestExplainText>TV중독TEST</TestExplainText>
          <TestSelectImg src="/TV_addict.jpg" onClick={goToTestFisrtTest}></TestSelectImg>
        </RelativePosition>
        <RelativePosition>
          <TestExplainText>스마트폰중독TEST</TestExplainText>
          <TestSelectImg src="/Phone_addict.jpg" onClick={goToTestSecondTest}></TestSelectImg>
        </RelativePosition>
        <RelativePosition>
          <TestExplainText>성격TEST</TestExplainText>
          <TestSelectImg src="/Personality.jpg" onClick={goToTestThirdTest}></TestSelectImg>
        </RelativePosition>
        <RelativePosition>
          <TestExplainText>성격에 맞는직업TEST</TestExplainText>
          <TestSelectImg src="/Personality_JOB.jpg" onClick={goToTestFourthTest}></TestSelectImg>
        </RelativePosition>
      </TestSelectGridContainer>
    </PageHead>
  )
}

export default TestsPage
