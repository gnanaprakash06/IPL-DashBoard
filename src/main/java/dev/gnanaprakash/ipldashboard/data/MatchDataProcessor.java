package dev.gnanaprakash.ipldashboard.data;

import dev.gnanaprakash.ipldashboard.model.Match;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.infrastructure.item.ItemProcessor;

import java.time.LocalDate;

public class MatchDataProcessor implements ItemProcessor<MatchInput, Match> {
    private static final Logger log = LoggerFactory.getLogger(MatchDataProcessor.class);

    @Override
    public Match process(final MatchInput matchInput) throws Exception {

        // Set Team 1 and Team 2 depending on the innings order
        String firstInningsTeam, secondInningsTeam;

        String tossLoser = matchInput.toss_winner().equals(matchInput.team1()) ? matchInput.team2() : matchInput.team1();
        if ("bat".equals(matchInput.toss_decision())) {
            firstInningsTeam = matchInput.toss_winner();
            secondInningsTeam = tossLoser;
        } else {
            secondInningsTeam = matchInput.toss_winner();
            firstInningsTeam = tossLoser;
        }

        final Match match = new Match(
                Long.parseLong(matchInput.id()),
                matchInput.city(),
                LocalDate.parse(matchInput.date()),
                matchInput.player_of_match(),
                matchInput.venue(),
                firstInningsTeam,
                secondInningsTeam,
                matchInput.toss_winner(),
                matchInput.toss_decision(),
                matchInput.winner(),
                matchInput.result(),
                matchInput.result_margin(),
                matchInput.umpire1(),
                matchInput.umpire2()
        );

        log.info("Converting ({}) into ({})", matchInput, match);

        return match;
    }
}
