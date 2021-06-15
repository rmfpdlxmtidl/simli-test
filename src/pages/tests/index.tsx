import PageHead from 'src/components/layouts/PageHead'
import styled from 'styled-components'
import Image from 'next/image'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { SquareFrame } from '..'
import { fadeIn } from 'src/styles/SpecialEffect'

const RelativePosition = styled.div`
  position: relative;

  @keyframes fadeOut1 {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.1;
    }
  }

  :hover {
    > text {
      animation-name: ${fadeIn};
      animation-duration: 1s;
      opacity: 1;
    }
    > a > div > img {
      animation-name: fadeOut1;
      animation-duration: 1s;
      opacity: 0.1;
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
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background: #eee;
`

const description = '테스트 목록을 확인해보세요'

function TestsPage() {
  return (
    <PageHead title="심리테스트 - 테스트 목록" description={description}>
      <h1>원하는 테스트를 골라보세요</h1>
      <SquareFrame>
        <TestSelectGridContainer>
          <RelativePosition>
            <TestExplainText>TV중독TEST</TestExplainText>
            <ClientSideLink href="/tests/Test_1">
              <Image src="/TV_addict.jpg" alt="test-1-image" layout="fill" objectFit="cover" />
            </ClientSideLink>
          </RelativePosition>
          <RelativePosition>
            <TestExplainText>스마트폰중독TEST</TestExplainText>
            <ClientSideLink href="/tests/Test_2">
              <Image src="/Phone_addict.jpg" alt="test-1-image" layout="fill" objectFit="cover" />
            </ClientSideLink>
          </RelativePosition>
          <RelativePosition>
            <TestExplainText>성격TEST</TestExplainText>
            <ClientSideLink href="/tests/Test_3">
              <Image src="/Personality.jpg" alt="test-image" layout="fill" objectFit="cover" />
            </ClientSideLink>
          </RelativePosition>
          <RelativePosition>
            <TestExplainText>성격에 맞는직업TEST</TestExplainText>
            <ClientSideLink href="/tests/Test_4">
              <Image src="/Personality_JOB.jpg" alt="test-image" layout="fill" objectFit="cover" />
            </ClientSideLink>
          </RelativePosition>
        </TestSelectGridContainer>
      </SquareFrame>
    </PageHead>
  )
}

export default TestsPage
