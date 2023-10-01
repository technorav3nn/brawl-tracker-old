<script>
	import { css } from "$styled-system/css";
	import {
		table,
		tableBody,
		tableCell,
		tableContainer,
		tableHead,
		tableHeader,
		tableRow,
	} from "$styled-system/recipes";
</script>

<div
	class={css({
		py: {
			base: 8,
			md: 32,
		},
	})}
>
	<div class={tableContainer({ variant: "bordered" })}>
		<table class={table()}>
			<thead class={tableHeader()}>
				<tr class={tableRow()}>
					<th class={tableHead()}>Rank</th>
					<th class={tableHead()}>Player</th>
					<th class={tableHead()}>Wins</th>
					<th class={tableHead()}>Games</th>
					<th class={tableHead()}>Win Rate</th>
					<th class={tableHead()}>Score</th>
				</tr>
			</thead>
			<tbody class={tableBody()}>
				<tr class={tableRow()}>
					<td class={tableCell()}>Example data</td>
					<td class={tableCell()}>Example data</td>
					<td class={tableCell()}>Example data</td>
					<td class={tableCell()}>Example data</td>
					<td class={tableCell()}>Example data</td>
					<td class={tableCell()}>Example data</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
