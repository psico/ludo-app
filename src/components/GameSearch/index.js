import React, {useState, useEffect } from "react";
import {withRouter} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {xml2js} from "xml-js";
import {gql, useQuery} from "@apollo/client";

const graphql = gql`
    query games{
        games {
            name,
            objectId,
            yearPublished
        }
    }
`;

const GameSearch = ({ parentCallback }) => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const {data, refetch} = useQuery(graphql);
    const loading = open && options.length === 0;

    const {t} = useTranslation();

    useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            const response = await fetch('https://boardgamegeek.com/xmlapi/search?search=catan');
            const boardgamesXml = await response.text();
            const boardgames = xml2js(boardgamesXml, {compact: true, spaces: 4});

            if (active) {
                setOptions(Object.keys(boardgames.boardgames.boardgame).map((key) => boardgames.boardgames.boardgame[key]));
            }
        })();

        return () => {
            active = false;
        };
    }, [loading]);

    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <Autocomplete
            id="asynchronous-game-search"
            style={{width: 300}}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);

            }}
            onChange={(event, values) => {
                parentCallback(values);
            }}
            getOptionLabel={(option) => option.name._text}
            options={options}
            loading={loading}
            renderInput={(params) => (
                <TextField
                    required
                    {...params}
                    label={t('game')}
                    variant="outlined"
                    placeholder={t('search-match-game')}
                    fullWidth={true}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress color="inherit"
                                                             size={20}/> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    );
};

export default withRouter(GameSearch);
