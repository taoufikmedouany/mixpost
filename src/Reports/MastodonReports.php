<?php

namespace Inovector\Mixpost\Reports;

use Inovector\Mixpost\Contracts\ProviderReports;
use Inovector\Mixpost\Models\Account;

class MastodonReports implements ProviderReports
{
    public function __invoke(Account $account, string $period): array
    {
        return [
            'likes' => 10,
            'retweets' => 2,
            'impressions' => 40,
            'audience' => []
        ];
    }
}