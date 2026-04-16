package dev.gnanaprakash.ipldashboard.controller;

import dev.gnanaprakash.ipldashboard.model.Team;
import dev.gnanaprakash.ipldashboard.repository.MatchRepository;
import dev.gnanaprakash.ipldashboard.repository.TeamRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class TeamController {

    private TeamRepository teamRepository;
    private MatchRepository matchRepository;

    public TeamController(TeamRepository teamRepository, MatchRepository matchRepository) {
        this.teamRepository = teamRepository;
        this.matchRepository = matchRepository;
    }

    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable String teamName) {
        Team team = this.teamRepository.findByTeamName(teamName);
        team.setMatches(matchRepository.findLatestMatchByTeam(teamName, 4));
        return team;
    }
}
