'use client'
import React, {useState } from "react";

import TeamHeroFacetComponent from "@/components/teamherofacets"; 
import {TeamListComponent} from "@/components/teamlist";

export default function Page() {
    const [selectedTeam , setSelectedTeam] = useState<number>(0);
    const [selectedTeamName , setSelectedTeamName] = useState<string>('');
    
    return (
        <div>
            <h1>Pick a team to see what Facets they prefer!</h1>
            <TeamListComponent selectedTeam={selectedTeam} setSelectedTeam={setSelectedTeam} setSelectedTeamName={setSelectedTeamName} />
            <TeamHeroFacetComponent selectedTeam={selectedTeam} selectedTeamName={selectedTeamName}/>
        </div>
    )
}