import avatar from './assets/avatar.jpg';
import { Wrapper, WrapperName, ProfessionalExperiences, Certificates, Item, Info, Edit, WrapperSocialPages, WrapperCertificate, WrapperProfessional, WrapperSchool, WrapperContent, WrapperInfo, ContactList, BreackLine, Bold, Title2, Title6, LinkUrl, ProfilePicture } from './styles';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faMapMarkedAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <Wrapper>
            <WrapperName>
              <Title2>Pedro Colletti</Title2>
              <ProfilePicture src={avatar}/>
            </WrapperName>
            <WrapperInfo>
              <Title2><Edit>Informações Pessoais</Edit></Title2>
                <ContactList>
                  <Info> <FontAwesomeIcon icon={ faMobileAlt }/>  (16) 99776-5777 </Info><BreackLine></BreackLine>
                  <Info> <FontAwesomeIcon icon={ faMailBulk }/> pedrocolletti@icloud.com </Info><BreackLine></BreackLine>
                  <Info> <FontAwesomeIcon icon={ faMapMarkedAlt }/> Av. Estrada de ferro, 148 - Araraquara-SP </Info>
                </ContactList>
            </WrapperInfo>
      <WrapperContent>
            <WrapperSchool>
              <Title2>Escolaridade</Title2>
                <Info><Bold>Anhanguera</Bold> Análise e Desenvolvimento de Sistemas </Info><BreackLine></BreackLine>
                <Info><Bold>Unipampa</Bold> Relações Internacionais</Info>
            </WrapperSchool>
            <WrapperProfessional>
              <Title2>Experiência Profissional</Title2>
                <ProfessionalExperiences>
                  <Item><Bold>BeOnUp: </Bold>Estagiário Dev fzendo atribuições básicas para aprender tudo sobre desenvolvimento ou pelo menos grande parte das coisas, com o nosso querido Edi. Agora estou escrevendo isso pra encher linguiça pra ver o comportamento da página quanto a quebra de linhas.</Item><BreackLine></BreackLine>
                  <Item><Bold>Saffi Consultoria: </Bold> Lá eu fazia um trabalho de vendas e não gostava. Tinha que ficar ligando e marcando reunião com empresarios, levava "tirada" toda hora e era bem estressante. </Item>
                </ProfessionalExperiences>
            </WrapperProfessional>
            <WrapperCertificate>
              <Title2>Certificados</Title2>
                <Certificates>
                  <Item><Bold>HTML e CSS</Bold> -  Alura</Item><BreackLine></BreackLine>
                  <Item><Bold>Básico em Lógica e programação</Bold> - DIO</Item>
                </Certificates>
            </WrapperCertificate>
      </WrapperContent>
            <WrapperSocialPages>
              <Title6><Bold>Páginas Sociais</Bold></Title6>
                  <LinkUrl href="https://www.linkedin.com/in/pedrocolletti/" title="Linkedln">   <FontAwesomeIcon color="black" icon={ faLinkedin }/></LinkUrl><BreackLine></BreackLine>
                  <LinkUrl href="https://github.com/PedroColletti" title="Github">  <FontAwesomeIcon color="black"  icon={ faGithubSquare }/></LinkUrl>
            </WrapperSocialPages>
    </Wrapper>
  );
}
export default App;