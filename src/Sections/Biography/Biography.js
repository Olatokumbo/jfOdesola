import React from "react";
import { Typography } from "@material-ui/core";
import style from "./Biography.module.css";
const Biography = ({show}) => {
  if(show)
  return (
    <div className={style.biography}>
      <div className={style.contentContainer}>
        <Typography component="p" className={style.content}>
          Johnson Funso Odesola born into the family of late PA. Samuel & late
          Madam Mariani Ereola Odesola of Igbajo town, Boluwaduro local
          Government in Osun State on June 5th 1959. Pastor Johnson, had his
          early education at Elementary Primary School, Igbajo and thereafter
          proceeded to the Polytechnic Ibadan to study Civil Engineering.
        </Typography>
        <Typography component="p" className={style.content}>
          His quest for knowledge led him to hold several degrees in different
          field of study. Like Marketing Postgraduate Diploma in Education from
          Imo State University. Master of Arts in Communication, from Jesus
          Bible University, Masters in Christian Education, from Ashland
          University in Association with Jesus Bible University, Ilorin, Nigeria
          to mention a few. Johnson Funso, an astute and dynamic preacher, a
          missionary per excellence, also holds Doctor of philosophy in
          Intercultural Studies from Trinity International University, Ph.D. in
          Christian Education from Ashland and another Ph.D. in International
          Studies from Trinity International University. Only, recently he
          bagged a Ph.D. in Human and Civil Right from University of Africa,
          Lusaka Zambia.
        </Typography>
        <Typography component="p" className={style.content}>
          Prof. Funso Johnson wears many caps: Pastor, Administrator, Author,
          Film producer, Lecturer, Actor etc. He speaks regularly at
          conferences, seminars and churches both home and abroad. He has
          attended many seminars/conferences even at the management level, he is
          a member and fellow of many professional bodies including CIPMN,
          ICSAN, NITAD, IPM, IRSM, IARN, ICPFM, CIML, IPDM, CIFCN, ICEN. Pastor
          Funso, worked briefly with Arakanga Housing project, Ijebu Ode as a
          project supervisor, also worked at various places especially within
          Ibadan metropolis before he heard and obeyed God’s call to ignite fire
          in the lives of youth at this end time and to accomplish great
          harvest.
        </Typography>

        <Typography component="p" className={style.content}>
          He is a lover of God and also delighted to be in the midst of young
          people. Pastor Johnson came from a linage of idol worshipper and one
          of his uncle was the custodian of the deity. At some point he had to
          live with this uncle (Baba Leyegun). The man had an expectation of
          making him the next priest of the idols and was grooming him for this
          task. But Pastor Odesola gave his life to Christ and all that changed.
          He later personally destroyed these family idols.
        </Typography>
        <Typography component="p" className={style.content}>
          Odesola, started his ministerial journey from RCCG, Bolumole, Ibadan,
          Oyo State in 1976. He is a missionary per excellence, pioneering many
          of the missionary work in the northern part of Nigeria with the
          cooperation of other faithful brethren like, Pastor Boluwakole, Pastor
          E. A Kalejaiye, Pastor Sunmonu. He worked in places like Kaduna, Jos,
          FCT, Taraba, Bauchi etc. He was transferred to Kwara, Ilorin as the
          State Pastor, and later as State Pastor of RCCG Ogun State, having
          Abeokuta as the headquarters. In 2000 from Ogun state he was
          transferred to Southern Africa 1 with base in Lusaka, Zambia, where he
          spent about 10 years before he was transferred home in year 2010 for
          greater assignment as a Special Assistant to the General Overseer on
          Administration and Personnel and was later promoted as the Assistant
          General Overseer Admin/Personnel in 2017. He’s also a member of the
          Governing Council of the Redeemed Christian Church of God and serves
          as the Secretary to the mission.
        </Typography>
        <Typography component="p" className={style.content}>
          As a film producers, he has written and also acted in a number of
          movies including Incurable Wounds (Nigeria & UK), Scars of Joy
          (Nigeria & UK), Not an Orphan (Nigeria & Dubai), Peril of Compromise,
          Battle across Boarders (USA). By God’s grace, Pastor Odesola has
          authored over 70 books with titles like Sexual Crimes in Africa and
          How to Deal With Them, Common Things that are not Common in the Work
          place, Principles of Church Planting and Missions in the Africa
          Context, Billionaires Capsules, Critical Thinking for Radical Issues,
          Marriage Without Tears, Daddy G.O: An Apostle of Holiness, Mummy G.O:
          An Apostle of Compassion. He has been married to the love of his
          Pastor Adebisi Rachael Odesola for 30 years now, and they are blessed
          with children and grandchildren. Pastor. Prof. Odesola, Johnson Funso
          is a fan of table tennis and volleyball.
        </Typography>
      </div>
    </div>
  );
  else
    return(
      <div></div>
    )
};

export default Biography;
